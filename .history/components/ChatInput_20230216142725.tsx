type Props = {
    chatId: string;
}

function ChatInput({ chatId }: Props) {
    return (
        <div>
            <form action="">
                <input type="text" 
                placeholder="Type you message here"
                />
            </form>
        </div>
    )
};

export default ChatInput;
