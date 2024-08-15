import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function TheatreCard() {
  return (
    <Card className="w-full rounded-xl m-4">
      <div className="flex flex-row">
        <div>
          <CardHeader classname="grid gap-1 p-4">
            <CardTitle>Theatre name</CardTitle>
            <CardDescription>Theatre location</CardDescription>
          </CardHeader>
        </div>
        <div className="flex flex-row items-center ">
          <div className="p-4">
            <Card className="text-green-500 font-semibold border-green-500 p-2">
              <CardTitle className="text-sm">12:30PM</CardTitle>
            </Card>
          </div>
          <div className="p-4">
            <Card className="text-green-500 font-semibold border-green-500 p-2">
              <CardTitle className="text-sm">12:30PM</CardTitle>
            </Card>
          </div>
          <div className="p-4">
            <Card className="text-green-500 font-semibold border-green-500 p-2">
              <CardTitle className="text-sm">12:30PM</CardTitle>
            </Card>
          </div>
          <div className="p-4">
            <Card className="text-green-500 font-semibold border-green-500 p-2">
              <CardTitle className="text-sm">12:30PM</CardTitle>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
}
