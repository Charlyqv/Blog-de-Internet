import { useSelector } from "react-redux";
import { useBlogStore, useUiStore } from "../../hooks";

export const AddNew = () => {

  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useBlogStore();

  const { onlineStatus:isOnline } = useSelector( state => state.onLine);

  const handleClickNew = () => {     
    setActiveEvent(null)    
    openDateModal();
  }

  return (
    <button
      className="btn btn-primary fab"
      onClick={ handleClickNew }
      disabled={!isOnline}
    >
      <i className="fas fa-plus"></i>
    </button>
  )

}
