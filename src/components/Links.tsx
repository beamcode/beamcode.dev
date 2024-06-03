export default function CoolLinks() {
  return (
    <div className="flex h-fit w-full flex-col items-center rounded-md bg-[white] p-5 pt-4 shadow-md dark:bg-[#181A1B]">
      <h1 className="text-md w-full pb-2.5 font-bold dark:text-white">Links</h1>
      <div className="flex flex-col w-full gap-1 text-sm rounded-md grow">
        <a
          className="text-gray-500 underline hover:text-[orange]"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=FNoVD-ljVBM"
        >
          Tokyo in 1993
        </a>
        <a
          className="text-gray-500 underline hover:text-[orange] dark:hover:text-[orange]"
          target="_blank"
          rel="noreferrer"
          href="https://ia802802.us.archive.org/29/items/THE48LAWSOFPOWER_201810/THE%2048%20LAWS%20OF%20POWER.pdf"
        >
          48 laws of power book
        </a>
        <a
          className="text-gray-500 underline hover:text-[orange] dark:hover:text-[orange]"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=01ZCnCXpG4A"
        >
          Importance of consistency
        </a>
        <a
          className="text-gray-500 underline hover:text-[orange] dark:hover:text-[orange]"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=3vuT8ki9yM4"
        >
          Ricky Gervais roasts celebrities
        </a>
        <a
          className="text-gray-500 underline hover:text-[orange] dark:hover:text-[orange]"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/@GiraffeAcademy"
        >
          Best coding teacher
        </a>
      </div>
    </div>
  );
}
