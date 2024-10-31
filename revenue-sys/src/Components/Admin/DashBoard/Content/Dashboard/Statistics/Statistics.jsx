
import GlobalStatistics from "../../../../../GlobalComponent/GlobalStatistics";
import Chart from "../Charts/Chart";

function Statistics() {
  return (
    <div className="flex-1">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        <GlobalStatistics
          title={"Water Revenue"}
          amount={"30000"}
          percent={"8.5%"}
          date={"Up from yesterday"}
          chartcolor={"bg-[#837ef4]"}
          color={"text-green-600"}
        />
        <GlobalStatistics
          title={"Market Revenue"}
          amount={"0.00"}
          percent={"1.3%"}
          date={"Up from past Week"}
          chartcolor={"bg-[#e6c173]"}
          color={"text-green-600"}
        />
        <GlobalStatistics
          title={"Transport Revenue"}
          amount={"50000"}
          percent={"4.3%"}
          date={"Down from Yesterday"}
          chartcolor={"bg-[#60c46c]"}
          color={"text-red-600"}
        />
        <GlobalStatistics
          title={"Schools Revenue"}
          amount={"20000"}
          percent={"1.8%"}
          date={"Up from yesterday"}
          chartcolor={"bg-[#e68627]"}
          color={"text-green-600"}
        />
      </div>
      <div className="flex-1 mt-12">
        <Chart />
      </div>
    </div>
  );
}

export default Statistics;
