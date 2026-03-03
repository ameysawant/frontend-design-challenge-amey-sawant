import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { ReusableModalProps } from "@/types/ReusableModalProps";

const ReusableModal = ({
  isOpen,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: ReusableModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn("sm:max-w-[425px] bg-sections border-border", className)}
      >
        <DialogHeader>
          <DialogTitle className="text-heading dark:text-white">
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="text-muted-foreground">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="py-4">{children}</div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export default ReusableModal;
