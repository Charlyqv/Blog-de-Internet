import { BlogLayout } from "../layout/BlogLayout"
import { NoteView, NothingSelectedView } from "../views";
import { AddNew } from "../components/AddNew";
import { BlogModal } from "../components";
import { Provider, useSelector } from "react-redux";
import { store } from "../../store";

const drawerWidth = 280;

export const BlogPage = () => {

  const { activeEvent } = useSelector( state => state.blog);

  return (
    <Provider store={ store }>
      <BlogLayout>
        {
          (!!activeEvent)
            ? <NoteView />
            : <NothingSelectedView />
        }
        <BlogModal />
        <AddNew />
      </BlogLayout>
    </Provider >
  )
}
