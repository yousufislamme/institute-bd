"use client";
import Button from "@/components/Button";
import { Context } from "@/components/Context/Context";
import { useContext, useEffect, useState } from "react";

const FaqView = () => {
  const { faq, setFaq, loading } = useContext(Context);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetch(
      "https://school-server-git-main-yousufislammes-projects.vercel.app/faq",
    )
      .then((res) => res.json())
      .then((data) => {
        setFaq(data);
        setFaqData(data);
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      });
  }, [setFaq]);

  const handleFaqDeleting = (_id) => {
    fetch(
      `https://school-server-git-main-yousufislammes-projects.vercel.app/faq/${_id}`,
      {
        method: "DELETE",
      },
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete the FAQ");
        }
        return res.json();
      })
      .then((faqDataDelete) => {
        if (faqDataDelete.acknowledged) {
          setFaq((prev) => prev.filter((singleFaq) => singleFaq._id !== _id));
          setFaqData((prev) =>
            prev.filter((singleFaq) => singleFaq._id !== _id),
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting FAQ:", error);
      });
  };

  return (
    <div className="px-5">
      <h2 className="text-lg font-semibold">FAQ item deleting.</h2>

      <div>
        {faqData.map((item) => (
          <div
            key={item._id}
            className="s m-2 flex items-center justify-between rounded-lg border-2 px-4 py-2"
          >
            <div>
              <h2 className="text-lg font-semibold capitalize">
                {item.faqTitle}
              </h2>
              <p className="text-md">{item.faqBody}</p>
            </div>
            <div>
              <Button
                BtnTitle="Delete"
                onClick={() => handleFaqDeleting(item._id)}
                className="rounded-lg bg-red-600 px-3 py-1 text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqView;
