import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function TheatreCard({ name, times }) {
  return (
      <Card className="w-full rounded-xl m-4">
        <div className="flex flex-row">
          <div>
            <CardHeader className="grid gap-1 p-4">
              <CardTitle>{name}</CardTitle>
              <CardDescription>Wakad</CardDescription>
            </CardHeader>
          </div>
          <div className="flex flex-row items-center">
            {times.map((time, index) => (
                <div key={index} className="p-4">
                  <Card className="text-green-500 font-semibold border-green-500 p-2">
                    <CardTitle className="text-sm">{time}</CardTitle>
                  </Card>
                </div>
            ))}
          </div>
        </div>
      </Card>
  );
}
