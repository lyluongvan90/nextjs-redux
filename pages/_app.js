//Component
import App from "next/app";
import { Provider } from "react-redux";
import { wrapper, store } from "../store";
//Style
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "@/styles/main.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be access by the client
    return { pageProps: pageProps };
  }

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default wrapper.withRedux(MyApp);
