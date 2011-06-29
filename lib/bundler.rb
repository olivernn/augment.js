require 'fileutils'

require 'rubygems'
require 'closure-compiler'
require 'fewer'

class Bundler
  DIST_DIR = File.expand_path('../../dist', __FILE__)
  SRC_DIR = File.expand_path('../../src', __FILE__)

  class << self
    def bundle!
      FileUtils.mkdir_p(DIST_DIR)

      write "#{DIST_DIR}/augment-#{version}.js" do
        Fewer::Engines::Js.new(SRC_DIR, files).read
      end

      write "#{DIST_DIR}/augment-#{version}.min.js" do
        Fewer::Engines::Js.new(SRC_DIR, files, :min => true).read
      end
    end

    def bundled
      Fewer::Engines::Js.new(SRC_DIR, files).read
    end

    private
      def files
        @files ||= %w(
          augment.array.every.js
          augment.array.filter.js
          augment.array.forEach.js
          augment.array.indexOf.js
          augment.array.isArray.js
          augment.array.lastIndexOf.js
          augment.array.map.js
          augment.array.reduce.js
          augment.array.reduceRight.js
          augment.array.some.js
          augment.date.now.js
          augment.date.toJSON.js
          augment.date.toISOString.js
          augment.function.bind.js
          augment.object.keys.js
          augment.string.trim.js
        )
      end

      def header
        @header ||= File.read(File.join(SRC_DIR, 'header.js'))
      end

      def version
        @version ||= File.read('VERSION').strip
      end

      def write(path, &block)
        puts "Generating #{path}"

        File.open(path, 'w') do |f|
          f.write header.gsub('@VERSION', version)
          f.write yield.gsub('@VERSION', version)
        end
      end
  end
end
