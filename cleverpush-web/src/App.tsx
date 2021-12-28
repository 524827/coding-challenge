import React, { useMemo, useState } from "react";
import "./App.css";
import { saveSubscriptions } from "./core/services/subscription";

declare global {
  interface Window {
    CleverPush?: any;
  }
}

function App() {
  const cleverPush = window.CleverPush || [];
  const subscribeStatus = localStorage.getItem(
    "cleverpush-subscription-status"
  );
  const [isSubscribe, setIsSubscribe] = useState<boolean>(
    subscribeStatus === "allowed"
  );
  const [error, setError] = useState(false);

  const checkIsSubscribe = () => {
    setError(false);
    cleverPush.push([
      "isSubscribed",
      function (result: any) {
        if (!result) {
          subscribe();
        } else {
          unSubscribe();
        }
      },
    ]);
  };

  const subscribe = () => {
    cleverPush.push([
      "subscribe",
      async (err: any, subscriptionId: string) => {
        if (err) {
          setError(true);
        } else {
          setIsSubscribe(true);
          setError(false);
          try {
            const payload = { subscription_id: subscriptionId };
            await saveSubscriptions(payload);
          } catch (e) {
            console.log(e);
          }
        }
      },
    ]);
  };

  const unSubscribe = () => {
    cleverPush.push(["unsubscribe"]);
    setIsSubscribe(false);
  };

  const buttonText = useMemo(() => {
    return isSubscribe ? "Unsubscribe" : "Subscribe";
  }, [isSubscribe]);

  return (
    <div className="App">
      <button className="button" type="button" onClick={checkIsSubscribe}>
        {buttonText}
      </button>
      {error && (
        <div style={{ marginTop: 10, color: "red" }}>
          Error While subscribing service
        </div>
      )}
    </div>
  );
}

export default App;
