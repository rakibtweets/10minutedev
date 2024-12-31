import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface AuthStat {
  _id: string;
  count: number;
}

interface AuthStatsProps {
  data: AuthStat[];
}

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))'];

export function AuthStatsCard({ data }: AuthStatsProps) {
  const total = data.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Authentication Methods</CardTitle>
        <CardDescription>Total: {total}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-[300px] items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="count"
                nameKey="_id"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
