import React, { useState } from 'react';
import { DialogDemo } from './popup';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function TheatreCard({ name, times }) {
  // State to control dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };

  // Function to close dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

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
              <button onClick={handleButtonClick}>
                <Card className="text-green-500 hover:text-white border border-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-400 rounded-2xl">
                  <CardTitle className="text-sm">{time}</CardTitle>
                </Card>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Render DialogDemo component if dialog is open */}
      {isDialogOpen && (
        <DialogDemo onClose={handleCloseDialog} />
      )}
    </Card>
  );
}
