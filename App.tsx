import "@/styles/global.css";
import { Profile } from "@/app/Profile";
import { StatusBar } from "expo-status-bar";
import { ToastProvider } from "@/components/Toast";

export default function App() {
  return (
    <ToastProvider position="top">
      <Profile />
      <StatusBar style="light" />
    </ToastProvider>
  );
}
