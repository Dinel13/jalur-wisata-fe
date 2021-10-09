import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { ButtonPending, ButtonSubmit } from "../../components/elements/button";
import { useAppDispatch } from "../../hooks/hooks";
import { getToken, selectName } from "../../store/authSlice";
import { hideNotification, showNotification } from "../../store/notifSlice";

const CreatDestiny = () => {
  const [isLoading, setIsLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const userName = useSelector(selectName);
  const token = useSelector(getToken)

  useEffect(() => {
    if (!userName) {
      dispatch(
        showNotification({
          message: "Anda harus login terlebih dahulu",
          status: "Error",
          action: null,
        })
      );
      // settimeoput to hide notif and redirect to auth page
      setTimeout(() => {
        dispatch(hideNotification());
        router.push("/auth");
      }, 2000);
    }
  });

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formdata = new FormData();
    formdata.append("name", nameRef.current!.value);
    formdata.append("description", descriptionRef.current!.value);
    formdata.append("image", imageRef.current!.files![0]);
    formdata.append("rating", ratingRef.current!.value);
    formdata.append("category", categoryRef.current!.value);
    try {
      const response = await fetch("http://47.254.192.86:4000/v1/destiny", {
        method: "POST",
        // attach token in header
        headers : {
          "Authorization" : `Bearer ${token}`
        },
        body: formdata,
      });
      const data = await response.json();
      console.log(data);
      
      if (!response.ok) {
        throw new Error(data.error.message);
      }
      router.push(`/destiny/${data.destiny.id}`)
    } catch (error) {
      console.log(error);
      dispatch(
        showNotification({
          message: error.message,
          status: "Error",
          action: null,
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-card max-w-2xl ">
      <h1 className="mb-3 font-semibold text-center dark:text-white">
        Post New Destiny Wisata
      </h1>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div>
          <label className="block text-sm font-medium">Nama Destinasi</label>
          <input
            ref={nameRef}
            type="text"
            required
            className="block w-5/6 px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">
            Deskripsi singkat destinasi
          </label>
          <textarea
            ref={descriptionRef}
            required
            className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            rows={4}
          ></textarea>
        </div>
        <div className="flex w-full items-center">
          <div className="mt-4 w-full md:w-1/2">
            <label className="block text-sm font-medium">
              Rating destinasi
            </label>
            <input
              ref={ratingRef}
              type="number"
              step="0.01"
              min="0"
              max="10"
              className="block w-full md:w-10/12 px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mt-4 w-full  md:w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Kategori destinasi
            </label>
            <select
              ref={categoryRef}
              className="block w-full md:w-10/12  px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="alam">Alam</option>
              <option value="city">City</option>
              <option value="menantang">Menantang</option>
            </select>
          </div>
        </div>
        {/* input for upload image */}
        <div className="mt-4">
          <label className="block text-sm font-medium">Upload Image</label>
          <input
            ref={imageRef}
            type="file"
            accept="image/*"
            required
            className="block w-full md:w-3/4 px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <br />
        {isLoading ? <ButtonPending /> : <ButtonSubmit text="POST" />}
      </form>
    </div>
  );
};

export default CreatDestiny;
