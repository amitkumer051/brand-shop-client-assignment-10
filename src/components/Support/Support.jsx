
const Support = () => {
    return (
        <div className="grid md:grid-cols-2 gap-5 my-8 items-center p-2">
            <div className="space-y-4">
                <h2 className="text-5xl font-bold">Support Desk</h2>
                <h3 className="text-base font-medium">Look up or raise your concerns right here. Getting your questions and queries sorted is now plain sailing</h3>
                <button className="btn  btn-active btn-neutral">Submit a Ticket</button>
            </div>
            <div>
                <img className="rounded-3xl" src="https://i.ibb.co/2MK0zX6/support.jpg" alt="" />
            </div>
        </div>
    );
};

export default Support;