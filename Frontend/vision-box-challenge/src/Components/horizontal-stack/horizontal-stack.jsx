export const HorizontalStack = ({className, children, gap, justifyContent="space-between", alignItems="center" }) => {
    return <div className={className} style={{display: "flex", flexDirection: "row", justifyContent: justifyContent, alignItems: alignItems, gap: gap}}>
            {children}
        </div>
}