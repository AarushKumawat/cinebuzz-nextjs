'use client'

// import { useState, useEffect } from "react"

// export default function Component() {
//   const [selectedSeat, setSelectedSeat] = useState(null)
//   const seatMatrix = [
//     [true, false, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true],
//     [true, true, true, true, true, true, true, true, true, true],
//   ]

//   const handleSeatClick = (row, col) => {
//     if (seatMatrix[row][col]) {
//       setSelectedSeat(selectedSeat === `${row}-${col}` ? null : `${row}-${col}`)
//     }
//   }

//   useEffect(() => {
//     // Set the background color of the body when the component mounts
//     document.body.style.backgroundColor = 'black';
    
//     // Cleanup function to reset the background color when the component unmounts
//     return () => {
//       document.body.style.backgroundColor = '';
//     }
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="grid grid-cols-10 gap-2 relative">
//         {seatMatrix.map((row, rowIndex) =>
//           row.map((available, colIndex) => (
//             <button
//               key={`${rowIndex}-${colIndex}`}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 available
//                   ? `bg-neutral-300 hover:bg-primary hover:text-primary-foreground ${
//                       selectedSeat === `${rowIndex}-${colIndex}` ? "bg-primary text-primary-foreground" : ""
//                     }`
//                   : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
//               }`}
//               onClick={() => handleSeatClick(rowIndex, colIndex)}
//               disabled={!available}
//             />
//           )),
//         )}
//       </div>
//     </div>
//   )
// }

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } 
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
