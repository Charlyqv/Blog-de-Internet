import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent } from "../store";

export const useBlogStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.blog );  

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent (calendarEvent) );
  }

  return {
    activeEvent,
    events,
    
    setActiveEvent,
  }
}
