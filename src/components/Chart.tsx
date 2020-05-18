import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

type Props = {
  series?: Highcharts.SeriesAbandsOptions[];
  title?: string;
  tooltip?: Highcharts.TooltipOptions;
};

const Chart: React.FC<Props> = ({ title, series = [], tooltip }) => {
  const options: Highcharts.Options = {
    series,
    tooltip,
    title: {
      text: title,
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%b '%y",
        year: "%Y",
      },
      title: {
        text: "Date",
      },
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
        },
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            plotOptions: {
              series: {
                marker: {
                  radius: 2.5,
                },
              },
            },
          },
        },
      ],
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
