'use client'
import { createClient } from "@/utils/supabase/client";
import { Button } from "@douyinfe/semi-ui";
import { useSearchParams } from "next/navigation";

export default () => {
  const next = useSearchParams().get('next');
  const decodeNext = next ? decodeURIComponent(next) : '';
  return <div className="bg-[rgba(250,250,250,0.8)] h-screen w-screen flex items-center justify-center">
    <Button onClick={()=>{
      createClient().auth.signInWithOAuth({
        provider:'google',
        options: {
          redirectTo: `${location.origin}/auth/callback${ decodeNext.startsWith("/") ? '?next=' + decodeNext : ''}`,
        },
      })
    }}>登录</Button>
  </div>;
};
