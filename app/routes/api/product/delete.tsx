import { ActionFunction, 
    json,
    LoaderFunction,
    redirect
   } from '@remix-run/node';import { db } from '~/utils/db.server';

// return type of this action
export type DeleteTaskActionData = {
  formError?: string;
  fieldErrors?: {
    id?: number;
  };
  fields?: {
    id?: number;
  };
  ok?: boolean;
};

const badRequest = (data: DeleteTaskActionData) => {
  return json(data, { status: 400 });
};

export const action: ActionFunction = async ({ request }) => {
  
  //setting values to fields from request
  const form = await request.formData();
  type fieldType = 'productId';
  const fieldList: fieldType[] = ['productId'];
  const fields = {} as Record<fieldType, number>;

  for (const fieldName of fieldList) {
    const fieldValue = form.get(fieldName) || '';
    fields[fieldName] = fieldValue as number;
  }

 
  //validation
  let fieldErrors = {} as Record<fieldType, number>;

  if (!fields.productId) {
    fieldErrors.productId = 'No Task Id provided';
    return badRequest({ fieldErrors, fields });
  }

  //deleting product to database
  try {
    await db.product.delete({
      where: {
        id: fields.productId,
      },
    });
  } catch (e) {
    return badRequest({
      formError: e.message,
    });
  }
  return redirect('/');
};