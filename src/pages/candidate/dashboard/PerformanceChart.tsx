"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTranslation } from "react-i18next";

export const description = "A clean performance area chart";

const chartData = [
  { month: "January", rating: 7.6 },
  { month: "February", rating: 6.3 },
  { month: "March", rating: 8.8 },
  { month: "April", rating: 9.0 },
  { month: "May", rating: 8.7 },
  { month: "June", rating: 9.4 },
];

const chartConfig = {
  rating: {
    label: "Rating",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const PerformanceChart = () => {
  const { t } = useTranslation();
  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle>{t("dashboard.chart")}</CardTitle>
        <CardDescription>{t("dashboard.chartDesc")}</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              domain={[0, 10]}
              tickLine={true}
              axisLine={true}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={{ stroke: "var(--chart-1)", strokeWidth: 1 }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              type="monotone"
              dataKey="rating"
              stroke="var(--chart-1)"
              fill="var(--chart-1)"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {t("dashboard.trending")} 5.2% {t("dashboard.thisMonth")}
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <div className="text-muted-foreground leading-none">
              {t("dashboard.time")}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PerformanceChart;
