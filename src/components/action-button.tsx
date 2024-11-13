export function ActionButton({ label }: { label: string }) {
    return (
        <button
            className={
                "relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#0a1c3a] to-[#1662D4] shadow-[0px_0px_12px_#1662D4]"
            }
        >
            <div className={"absolute inset-0 rounded-lg"}>
                <div
                    className={
                        "absolute inset-0 border rounded-lg border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"
                    }
                />
                <div
                    className={
                        "absolute inset-0 border rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"
                    }
                />
                <div
                    className={
                        "absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(22,98,212,0.7)_inset]"
                    }
                />
            </div>
            <span>{label}</span>
        </button>
    );
}
