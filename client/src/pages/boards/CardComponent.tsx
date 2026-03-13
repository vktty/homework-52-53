import { ArrowLeftOutlined, ArrowRightOutlined, DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons"
import { Card } from "antd"

export const CardComponent = ({id, name, description}) => {

    return (
        <Card
            style={{ width: 300 }}
            actions={[
                <ArrowLeftOutlined />,
                <ArrowRightOutlined />,
                <EditOutlined />,
                <EyeOutlined />,
                <DeleteOutlined />,
            ]}
            id={id}        
            title={name}
            >
            {description}
        </Card>
    )
}