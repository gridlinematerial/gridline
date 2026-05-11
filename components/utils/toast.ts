import { toast } from "sonner";

type ToastOptions = {
  title: string;
  description?: string;
};

export const appToast = {
  success: ({ title, description }: ToastOptions) => {
    toast.success(title, {
      description,

      style: {
        background: "#fca311",
        color: "#14213d",
        border: "none",
      },
    });
  },

  error: ({ title, description }: ToastOptions) => {
    toast.error(title, {
      description,

      style: {
        background: "#14213d",
        color: "#ffffff",
        border: "none",
      },
    });
  },

  info: ({ title, description }: ToastOptions) => {
    toast(title, {
      description,

      style: {
        background: "#e5e5e5",
        color: "#14213d",
        border: "none",
      },
    });
  },
};
