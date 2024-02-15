import Counter from './Counter'

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <p>
        Page should load first time. If no changes were made, it could possibly be refreshed after server restart. Any changes in code probably will very likely not be delivered to browser even after hard refresh.
      </p>
      <p>
        Simply restarting server process will not fix it. Have to stop process, delete .next folder, start process and refresh page.
        If it works, it works quickly (after server logs say compiled). If not, it will give error after long time. Have to do repeat previous steps again then.
      </p>
      <p>Client side functionality works normally when loaded successfully.</p>
      <Counter/>
    </>
  )
}
