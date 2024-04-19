import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={phone.image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{phone.name}</h2>
          <h2 className="text-2xl">Price ${phone.price}</h2>
          <p>{phone.description}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
