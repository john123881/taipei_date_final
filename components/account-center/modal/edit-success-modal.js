export default function EditSuccessModal() {
  return (
    <>
      <input
        type="checkbox"
        id="edit_success_modal"
        role="dialog"
        className="modal-toggle"
      />
      <div className=" modal modal-bottom sm:modal-middle">
        <div className="flex  justify-center modal-box w-[95%] mx-4 h-[365px] flex flex-col sm:w-[564px]">
          <p className="flex justify-center font-bold text-primary text-h4">
            編輯結果
          </p>
          <p className="flex justify-center mt-[30px] font-bold text-light text-h5">
            編輯完成
          </p>
          <div className="justify-center modal-action mt-[20px]">
            <label
              htmlFor="edit_success_modal"
              className={`btn w-1/2 min-h-[25px] btn-sm sm:w-[135px] rounded-full border-dark  btn-primary btn bg-primary hover:bg-primary hover:shadow-xl3 hover:border-primary font-bold `}
            >
              繼續編輯
            </label>
            <a
              href="/account-center/account-index"
              className="btn w-1/2 min-h-[25px] h-[32px] btn-sm sm:w-[135px] ml-4 rounded-full btn-outline bg-dark btn-md hover:bg-dark text-primary hover:text-primary hover:shadow-xl3 hover:border-dark "
            >
              返回會員中心
            </a>
          </div>
        </div>

        {/* <form method="dialog" className="modal-backdrop">
        </form> */}
      </div>
    </>
  );
}
