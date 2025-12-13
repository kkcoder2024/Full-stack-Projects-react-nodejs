import PropTypes from "prop-types";
export default function StatsCard({ count, description }) {
  return (
    <div className="mt-12 text-center">
      <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          Total Projects: {count}
        </h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

StatsCard.propTypes = {
  count: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
