export function Footer() {
  return (
    <div className="w-full flex items-center justify-center py-4 px-8 dark:bg-verdigris dark:text-gun-metal md:col-span-2">
      <p>&#169; {` ${new Date().getFullYear()} Kufre Samuel`} </p>
    </div>
  );
}
