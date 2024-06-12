import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// eslint-disable-next-line react/prop-types
export default function ProductCard({product, key}) {
    return (
        <Card className="overflow-hidden" key={key}>
            <CardContent className={"p-3"}>
                <div className="grid gap-2">
                    <img
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src={product.url}
                        width="300"
                    />
                </div>
            </CardContent>
            <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
            </CardHeader>
        </Card>
    )
}
