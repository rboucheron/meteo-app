import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

function DateComponent() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const today: Date = new Date();
    setDate(today.toLocaleDateString());
  }, []);

  return (
    <>
      <div className="text-sm  text-slate-50 flex items-center  p-2 ">
        <Clock />  {date}
      </div>
    </>
  );
}

export default DateComponent;
