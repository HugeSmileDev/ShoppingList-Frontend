import { Button } from '@material-tailwind/react'
import { IShopItem } from '@/utils/types'
import ShopItem from './ShopItem'

interface IShopList {
    items: IShopItem[]
}

const ShopList = ({ items }: IShopList) => (
    <div className="mt-[35px] w-full">
        <div className="mx-[164px]">
            <div className="flex items-end justify-between mb-[11px]">
                <div className="text-[18px] font-semibold leading-6">
                    Your Items
                </div>
                <Button className="bg-[#1871E8] rounded-1 capitalize text-[14px] font-semibold leading-5 px-[15px] py-[8px]">
                    Add Item
                </Button>
            </div>
            <div className="flex flex-col gap-3">
                {items.map((item, key) => (
                    <ShopItem {...item} key={key.toString()} />
                ))}
            </div>
        </div>
    </div>
)

export default ShopList