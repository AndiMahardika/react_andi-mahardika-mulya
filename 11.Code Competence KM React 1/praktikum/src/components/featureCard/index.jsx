export default function FeatureCard(props) {
  const { title, description, img, imgPosition } = props;

  return (
    <>
      <section className="flex items-center justify-between font-roboto">
        {imgPosition === "left" && (
          <div className="w-1/2">
            <img
              className="rounded-3xl object-cover"
              src={img}
              alt=""
            />
          </div>
        )}
        <div className="space-y-6 w-2/5">
          <h4 className="font-semibold text-3xl text-blue-500">
            {title}
          </h4>
          <p className="font-normal text-slate-700">
            {description}
          </p>
        </div>
        {imgPosition === "right" && (
          <div className="w-1/2">
            <img
              className="rounded-3xl object-cover"
              src={img}
              alt=""
            />
          </div>
        )}
      </section>
    </>
  );
}
