import { ActionFunction, 
         json,
         LoaderFunction,
         redirect
        } from '@remix-run/node';
import { db } from '~/utils/db.server';

// return type of this action 
export type NewProductActionData = {
  formError?: string;
  fieldErrors?: {
    name?: string;
    price?: number;
    stock?: number;
    categoryId?: number;

  };
  fields?: {
    name?: string;
    price?: number;
    stock?: number;
    categoryId?: number;
  };
  ok?: boolean;
};

const badRequest = (data: NewProductActionData) => {
  return json(data, { status: 400 });
};

export const action: ActionFunction = async ({ request }) => {
  //setting values to fields from request
  const form = await request.formData();
  const name = form.get('name');
  const stock = form.get('stock');
  const price = form.get('price');
  const categoryId = form.get('categoryId');
  
  
  //validation
  if (
    typeof name !== 'string' ||
    typeof stock !== 'number' ||
    typeof price !== 'number' ||
    typeof categoryId !== 'number'
  ) {
    return json({ error: `Invalid Form Data` }, { status: 400 })
  }


  //adding product to database
  try {
    await db.product.create({
      data: {
        name: name,
        stock: stock,
        price: price,
        categoryId: categoryId
      },
    });
  } catch (e) {
    console.log('Error', e);
    return badRequest({
      formError: e.message,
    });
  }
  return json({ ok: true });
};