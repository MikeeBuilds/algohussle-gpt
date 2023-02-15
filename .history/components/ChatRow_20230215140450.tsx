import Link from "next/link";

type Props = {
    id: string;
};

function ChatRow({id}: Props) {
    return (
        <Link 
            href={`/chat/$Pid`}
        >
            
        </Link>
    )
}

export default ChatRow
