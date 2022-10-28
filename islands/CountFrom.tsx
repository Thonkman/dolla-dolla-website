import { useEffect, useState } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function Countdown(props: { target: string }) {
  const target = new Date(props.target);
  const [now, setNow] = useState(new Date());
  let dateNow = new Date();

  // Set up an interval to update the `now` date every second with the current
  // date as long as the component is mounted.
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(() => {
        return new Date();
      });
      dateNow = new Date();
    }, 1000);
    return () => clearInterval(timer);
  }, [props.target]);

  // created at second 5, it's currently second 8, 8 - 5, it's been 3 seconds since it was created

  //now1666634556610 target1592436647000000
  // 1666634556610
  // 1592436647000000

  // Otherwise, we format the remaining time using `Intl.RelativeTimeFormat` and
  // render it.
  // now: 1001
  // from: 600
  const secondsSince = Math.floor(((dateNow.getTime() - target.getTime()) / 1000));
  console.log("now" + dateNow.getTime() + " target" + target.getTime())
  //const secondsSince = dateNow.getTime()
  return <span>{secondsSince}</span>;
}