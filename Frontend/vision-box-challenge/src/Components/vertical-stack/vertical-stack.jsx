export const VerticalStack = ({className, children, gap,  justifyContent="space-between", alignItems="center" }) => {
    return <div className={className} style={{display: "flex", flexDirection: "column", justifyContent: justifyContent, alignItems: alignItems, gap: gap}}>
            {children}
        </div>
}