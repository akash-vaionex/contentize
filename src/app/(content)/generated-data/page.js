'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { Hero, GeneratedContent } from "@/components/contentGeneration"
import { useContentContext } from "@/contexts/contentContext";

export default function GenertedData() {

    const { generatedContent } = useContentContext();
    console.log(generatedContent, 'dddd')
    // const message = router.query.message || 'No message';

    return (
        <div>
            <div>{generatedContent.title}</div>
        </div>
    )
}