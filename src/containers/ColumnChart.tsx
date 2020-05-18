import moment from "moment";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Alert from "../components/Alert";
import Chart from "../components/Chart";
import { useQueryApi, useSumValuesByKey } from "../hooks";
import { DateFormat } from "../utils";

const ColumnChart = () => {
  const { payload = [], error } = useQueryApi();
  const [alertError, setAlertError] = useState(error);

  useEffect(() => {
    setAlertError(error);
  }, [error, setAlertError]);

  const closeError = useCallback(() => {
    setAlertError(false);
  }, [setAlertError]);

  const dataColumnPrepared = useMemo(() => {
    if (payload.message) return []
    return payload.map(
      ({ created_at: createdAt, updated_at: updateAt, comments }: any) => ({
        updateAt: moment(updateAt, DateFormat).valueOf(),
        createdAt: moment(createdAt, DateFormat).valueOf(),
        comments,
        issues: 1,
      })
    );
  }, [payload]);

  const { dataMap: dataCreatedAtIssues } = useSumValuesByKey({
    data: dataColumnPrepared,
    key: "createdAt",
    value: "issues",
  });

  const { dataMap: dataCreatedAtComments } = useSumValuesByKey({
    data: dataColumnPrepared,
    key: "createdAt",
    value: "comments",
  });

  const { dataMap: dataUpdatedAtIssues } = useSumValuesByKey({
    data: dataColumnPrepared,
    key: "updateAt",
    value: "issues",
  });

  const { dataMap: dataUpdateAtComments } = useSumValuesByKey({
    data: dataColumnPrepared,
    key: "updateAt",
    value: "comments",
  });

  const seriesCreatedAt = useMemo(
    () => [
      {
        type: "column" as any,
        data: dataCreatedAtIssues,
        name: "Issues",
      },
      {
        type: "column" as any,
        data: dataCreatedAtComments,
        name: "comments",
      },
    ],
    [dataCreatedAtIssues, dataCreatedAtComments]
  );

  const seriesUpdatedAt = useMemo(
    () => [
      {
        type: "column" as any,
        data: dataUpdatedAtIssues,
        name: "Issues",
      },
      {
        type: "column" as any,
        data: dataUpdateAtComments,
        name: "comments",
      },
    ],
    [dataUpdatedAtIssues, dataUpdateAtComments]
  );

  return (
    <>
      <Alert
        message="There was a problem with the server"
        open={alertError}
        onClose={closeError}
      />
      <Chart
        title="CreatedAt chart"
        series={seriesCreatedAt}
        tooltip={{
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "{point.x:%e. %b}: {point.y:.2f} issues",
        }}
      />
      <Chart
        title="UpdateAt chart"
        series={seriesUpdatedAt}
        tooltip={{
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "{point.x:%e. %b}: {point.y:.2f} issues",
        }}
      />
    </>
  );
};

export default ColumnChart;
