import { resetPropWarnings } from "preact/debug";
import Control from "../islands/Control.tsx"

export default function ControlInterface () {
   return (<form>
      <label>power</label> <input name="is_playing" type="checkbox" /> <br />
      <label>frequency</label> <input name="frequency" value={ 440 } /> <br />
      <label>lag time</label> <input name="lag_time" value={ 0 }/> <br />
      <label>amplitude</label> <input name="amplitude" type="range" /> <br />
      <button type="submit">submit</button>
      

   </form>)
}