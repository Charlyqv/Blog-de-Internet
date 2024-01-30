import { Provider, useSelector } from "react-redux"
import { BlogPage } from "./blog/pages/BlogPage"
import { AppTheme } from "./theme"
import { store } from "./store";
import OnlineProvider from "./OnlineProvider";

export const BlogApp = () => {

  return (
    <Provider store={ store }>
      <OnlineProvider>
        <AppTheme>
          <BlogPage/>
        </AppTheme>
      </OnlineProvider>
    </Provider>
  )
}
