const { useBlockProps } = wp.blockEditor;

export default function Save() {
    const blockProps = useBlockProps.save();
    return (
        <div {...blockProps}>
            <div id="food-expense-tracker-root"></div>
        </div>
    );
}