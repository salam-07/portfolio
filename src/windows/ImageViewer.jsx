import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageViewer = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{data.name}</h2>
            </div>

            <div className="bg-gray-100 p-8 overflow-y-auto h-full flex flex-col items-center justify-center">
                {data.imageUrl ? (
                    <div className="max-w-4xl w-full">
                        <img
                            src={data.imageUrl}
                            alt={data.name}
                            className="w-full h-auto rounded-lg shadow-lg object-contain"
                        />
                        {data.subtitle && (
                            <p className="text-center mt-4 text-gray-700 text-lg">
                                {data.subtitle}
                            </p>
                        )}
                        {data.description && Array.isArray(data.description) && (
                            <div className="mt-6 space-y-3 text-gray-600">
                                {data.description.map((paragraph, index) => (
                                    <p key={index} className="leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-gray-500 text-center">
                        <p className="text-xl">No image available</p>
                    </div>
                )}
            </div>
        </>
    );
};

const ImageViewerWindow = WindowWrapper(ImageViewer, "imgfile");

export default ImageViewerWindow;
