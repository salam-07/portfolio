import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{data.name}</h2>
            </div>

            <div className="bg-white p-8 overflow-y-auto h-full">
                {data.image && (
                    <div className="mb-6">
                        <img
                            src={data.image}
                            alt={data.name}
                            className="w-32 h-32 rounded-lg object-cover"
                        />
                    </div>
                )}

                {data.subtitle && (
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        {data.subtitle}
                    </h3>
                )}

                {data.description && Array.isArray(data.description) && (
                    <div className="space-y-4">
                        {data.description.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
