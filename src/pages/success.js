import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Head from "next/head";

function Success() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title> Amazon.in Order Confirmed</title>
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, Your Order has been Confirmed!
            </h1>
          </div>
          <p>
            Thank You for Shopping with us. We'll send a confirmation once your
            item has been shipped. If you would like to check the status of your
            order(s) please press the link below.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to My Orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
