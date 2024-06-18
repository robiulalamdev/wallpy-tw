import { Button } from "@material-tailwind/react";
import RulesHeader from "../../components/shared/headers/RulesHeader";
import { useMemo, useState } from "react";
import DraftPublishSidebar from "../../components/upload/DraftPublishSidebar";
import filter from "../../assets/icons/search-wallpapers/filter.gif";
import { useGetWallpapersQuery } from "../../redux/features/wallpapers/wallpapersApi";
import PageLoading from "../../components/common/loadings/PageLoading";
import VaultEmpty from "../../components/upload/VaultEmpty";
import VaultImages from "../../components/upload/VaultImages";

const DraftAndPublish = () => {
  const { data, isLoading } = useGetWallpapersQuery();
  const [tab1, setTab1] = useState("Drafts");
  const [open, setOpen] = useState(false);
  const [drafts, setDrafts] = useState([]);
  const [published, setPublished] = useState([]);

  const [selectedDrafts, setSelectedDrafts] = useState([]);
  const [selectedPublished, setSelectedPublished] = useState([]);

  useMemo(() => {
    if (data?.data) {
      setDrafts(data?.data?.drafts);
      setPublished(data?.data?.published);
    }
  }, [data]);

  const handleDraftSelect = async (item) => {
    const itemIndex = await selectedDrafts.findIndex(
      (sItem) => sItem?._id === item?._id
    );
    if (itemIndex !== -1) {
      const stored = [...selectedDrafts];
      stored.splice(itemIndex, 1);
      setSelectedDrafts(stored);
    } else {
      setSelectedDrafts([...selectedDrafts, item]);
    }
  };

  const handlePublishedSelect = async (item) => {
    const itemIndex = await selectedPublished.findIndex(
      (sItem) => sItem?._id === item?._id
    );
    if (itemIndex !== -1) {
      const stored = [...selectedPublished];
      stored.splice(itemIndex, 1);
      setSelectedPublished(stored);
    } else {
      setSelectedPublished([...selectedPublished, item]);
    }
  };

  const handleTab = (t) => {
    setTab1(t);
  };

  return (
    <>
      <RulesHeader />
      <div>
        <h1 className="text-[#FFF] text-center font-bakbak-one text-[15px] md:text-[25px]">
          The Vault
        </h1>
        <div className="border-t-[1px] border-[#5A5A5A] mt-[15px] mb-[24px] md:mt-[39.51px] md:mb-[26.49px] w-full"></div>

        <div className="max-w-[295px] flex justify-start lg:justify-center mb-[21px]">
          <div className="bg-[#00000033] rounded-[100px] w-[186px] h-[45px] flex justify-between items-center px-[8px]">
            {["Drafts", "Published"].map((t, i) => (
              <Button
                onClick={() => handleTab(t)}
                key={i}
                className={`hover:shadow-none shadow-none p-0 m-0 normal-case font-lato text-[12px] leading-[14.4px] font-bold w-[86px] h-[32px] md:min-w-[86px] md:h-[32px]  ${
                  tab1 === t
                    ? `${
                        t === "Drafts" ? "bg-[#DD2E44]" : "bg-[#63B126]"
                      } !text-white rounded-[100px]`
                    : "bg-transparent !text-[#C6C6C6]"
                }`}
              >
                {t}
              </Button>
            ))}
          </div>

          <img
            onClick={() => setOpen(!open)}
            src={filter}
            alt=""
            className="w-[57px] h-[39px] lg:hidden"
          />
        </div>

        <div className="flex justify-between items-start gap-x-[28px] min-h-[986px] max-h-[1010px] h-full">
          {tab1 === "Drafts" ? (
            <DraftPublishSidebar
              open={open}
              setOpen={setOpen}
              selectedImages={selectedDrafts}
              resetSelect={setSelectedDrafts}
              items={drafts}
              currentTab={tab1}
            />
          ) : (
            <DraftPublishSidebar
              open={open}
              setOpen={setOpen}
              selectedImages={selectedPublished}
              resetSelect={setSelectedPublished}
              items={published}
              currentTab={tab1}
            />
          )}

          <div className="w-full h-full flex-grow">
            {isLoading && <PageLoading />}

            {!isLoading && tab1 === "Drafts" && drafts?.length > 0 && (
              <VaultImages
                images={drafts}
                selectedImages={selectedDrafts}
                handleSelectImages={handleDraftSelect}
              />
            )}
            {!isLoading && tab1 === "Published" && published?.length > 0 && (
              <VaultImages
                images={published}
                selectedImages={selectedPublished}
                handleSelectImages={handlePublishedSelect}
              />
            )}

            {tab1 === "Drafts" && drafts?.length < 1 && <VaultEmpty />}
            {tab1 === "Published" && published?.length < 1 && <VaultEmpty />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DraftAndPublish;
