"use client";

import { FaHourglassHalf } from "react-icons/fa";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="coming-soon-overlay">
      <div className="coming-soon-card">
        <FaHourglassHalf size={48} className="coming-icon" />
        <h1>Coming Soon</h1>
        <p>
          This section is under construction—stay tuned for something awesome!
        </p>
        <Link href="/" className="cta-button purple">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
