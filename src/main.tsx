import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

// biome-ignore lint/style/noNonNullAssertion: This is a root file, so it's okay to use non-null assertion here.
render(<App />, document.getElementById("app")!);
