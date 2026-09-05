"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const PopupComp = ({ isOpen, onClose, PopupData }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{PopupData?.header}</DialogTitle>
          <DialogDescription>{PopupData?.description}</DialogDescription>
        </DialogHeader>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          {PopupData?.message.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <DialogFooter>
          <Button onClick={onClose}>Got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupComp;