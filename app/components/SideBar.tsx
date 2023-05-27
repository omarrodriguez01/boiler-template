import MusicNoteIcon from '@material-ui/icons/MusicNote';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import PersonIcon from '@material-ui/icons/Person';
import AlbumIcon from '@material-ui/icons/Album';

const SideBar = () => {

    return (
        <div>
            <aside id="logo-sidebar" className="top-0 left-0 z-40 w-64 h-screen pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <MusicNoteIcon/>
                                <span className="ml-3">Songs</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <QueueMusicIcon/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Playlists</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <PersonIcon/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Artists</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <AlbumIcon/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Albums</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SideBar;