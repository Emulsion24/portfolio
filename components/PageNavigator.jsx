"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function PageNavigator() {
  const router = useRouter();
  const pathname = usePathname();

  const TOTAL_PAGES = 25;

  const getCurrentPage = () => {
    if (
      pathname === "/" ||
      pathname === ""
    ) {
      return 1;
    }

    const match = pathname.match(
      /page(\d+)/
    );

    if (!match) {
      return 1;
    }

    const page = Number(match[1]);

    if (
      Number.isNaN(page) ||
      page < 1 ||
      page > TOTAL_PAGES
    ) {
      return 1;
    }

    return page;
  };

  const currentPage = getCurrentPage();

  const goToPage = (page) => {
    if (
      page < 1 ||
      page > TOTAL_PAGES
    ) {
      return;
    }

    if (page === 1) {
      router.push("/");
      return;
    }

    router.push(
      `/page${String(page).padStart(1, "0")}`
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999999,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "8px",
          borderRadius: "999px",
          background: "rgba(9,10,11,0.88)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.4)",
        }}
      >
        {/* PREVIOUS */}

        <button
          type="button"
          onClick={() =>
            goToPage(currentPage - 1)
          }
          disabled={currentPage === 1}
          aria-label="Previous page"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            height: "36px",
            padding: "0 12px",
            border: 0,
            borderRadius: "999px",
            background: "transparent",
            color: "#fff",
            opacity:
              currentPage === 1 ? 0.25 : 0.7,
            cursor:
              currentPage === 1
                ? "not-allowed"
                : "pointer",
          }}
        >
          <ArrowLeft size={14} />

          <span className="navigator-text">
            Prev
          </span>
        </button>

        <div
          style={{
            width: "1px",
            height: "20px",
            background:
              "rgba(255,255,255,0.12)",
          }}
        />

        {/* NUMBERS */}

        <div
          className="navigator-numbers"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          {Array.from(
            { length: TOTAL_PAGES },
            (_, index) => index + 1
          ).map((page) => {
            const active =
              page === currentPage;

            return (
              <button
                key={page}
                type="button"
                onClick={() =>
                  goToPage(page)
                }
                aria-label={`Go to page ${page}`}
                style={{
                  width: "32px",
                  height: "32px",
                  border: 0,
                  borderRadius: "50%",
                  background: active
                    ? "#d9ff4f"
                    : "transparent",
                  color: active
                    ? "#090a0b"
                    : "rgba(255,255,255,0.4)",
                  fontSize: "10px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {String(page).padStart(
                  2,
                  "0"
                )}
              </button>
            );
          })}
        </div>

        <div
          style={{
            width: "1px",
            height: "20px",
            background:
              "rgba(255,255,255,0.12)",
          }}
        />

        {/* NEXT */}

        <button
          type="button"
          onClick={() =>
            goToPage(currentPage + 1)
          }
          disabled={
            currentPage === TOTAL_PAGES
          }
          aria-label="Next page"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            height: "36px",
            padding: "0 12px",
            border: 0,
            borderRadius: "999px",
            background: "transparent",
            color: "#fff",
            opacity:
              currentPage === TOTAL_PAGES
                ? 0.25
                : 0.7,
            cursor:
              currentPage === TOTAL_PAGES
                ? "not-allowed"
                : "pointer",
          }}
        >
          <span className="navigator-text">
            Next
          </span>

          <ArrowRight size={14} />
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 700px) {
          .navigator-numbers {
            display: none !important;
          }

          .navigator-text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}