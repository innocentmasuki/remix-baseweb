import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import { LightTheme, BaseProvider, styled } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "./styletron";

export function meta() {
  return { title: "Remix + Baseweb" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Wrapp StyletronProvider to the root of the application under the html */}
        <StyletronProvider value={styletron}>
          <BaseProvider theme={LightTheme}>
            <Outlet />
          </BaseProvider>
        </StyletronProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
